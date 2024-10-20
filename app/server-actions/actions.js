'use server'

import { revalidateTag } from 'next/cache.js'
// ==================================================================
//                    IMPORTS & DECLARATIONS
// ==================================================================
import airtableFetch from '../../utils/airtableFetch.js'

const sessionTableId = process.env.SESSION_TABLE_ID
const userTableId = process.env.USER_TABLE_ID

// ==================================================================
//                      SESSION ACTIONS
// ==================================================================
// ------------------------------------------------------------------
// START A NEW SESSION
export const startSession = async (id) => {
  const fields = {
    User: [id],
    CheckIn: new Date().toISOString(),
    IsOpen: true,
  }

  // POST a new session
  const response = await airtableFetch(sessionTableId, {
    method: 'POST',
    body: {
      records: [{ fields: fields }],
    },
  })
  const createdSession = response.records[0]

  // PATCH the user to set CheckedIn to true
  await airtableFetch(userTableId, {
    method: 'PATCH',
    body: {
      records: [
        {
          id: id,
          fields: {
            CheckedIn: true,
          },
        },
      ],
    },
  })

  // Revalidate the tag
  await revalidateTag('users')

  return createdSession
}

// ------------------------------------------------------------------
// END AN EXISTING SESSION
export const endSession = async (id) => {
  const queryParams = new URLSearchParams(
    `filterByFormula=AND(UserID='${id}', IsOpen=TRUE())`
  )
  const queryURL = sessionTableId + `?` + queryParams
  const queryResponse = await airtableFetch(queryURL)

  const session = {
    records: [
      {
        id: queryResponse.records[0].id,
        fields: {
          CheckOut: new Date().toISOString(),
          IsOpen: false,
        },
      },
    ],
  }
  const response = await airtableFetch(sessionTableId, {
    method: 'PATCH',
    body: session,
  })

  await airtableFetch(userTableId, {
    method: 'PATCH',
    body: {
      records: [
        {
          id: id,
          fields: {
            CheckedIn: false,
          },
        },
      ],
    },
  })

  // Revalidate the tag
  await revalidateTag('users')

  const endedSession = response.records[0]
  return endedSession
}

// ==================================================================
//                      USER ACTIONS
// ==================================================================

// ------------------------------------------------------------------
// REGISTER A NEW USER
export const registerUser = async (req) => {
  const response = await airtableFetch(userTableId, {
    method: 'POST',
    body: {
      records: [{ fields: req.body }],
    },
  })

  const createdUser = response.records[0]
  await revalidateTag('users')
  return createdUser
}

// ------------------------------------------------------------------
// LOOK UP ALL USERS FOR A GIVEN CHECK-IN STATUS
export const getAllUsers = async (direction) => {
  let checkInFilter = ''
  if (direction === 'in') {
    checkInFilter = 'CheckedIn=FALSE()'
  }
  if (direction === 'out') {
    checkInFilter = 'CheckedIn=TRUE()'
  }

  const params = new URLSearchParams({
    'sort[0][field]': 'Name',
    'sort[0][direction]': 'asc',
    filterByFormula: checkInFilter,
  })

  const apiPath = userTableId + '?' + params.toString()

  const response = await airtableFetch(apiPath, {
    next: { tags: ['users'] },
  })
  const users = response.records
  return users
}
