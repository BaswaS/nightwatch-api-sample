/* eslint-disable import/no-extraneous-dependencies */
/* this is a setup file.Basically allows us to setup/end
certain things before and after the test scenarios */

const { setDefaultTimeout, BeforeAll, AfterAll } = require('cucumber')

const { createSession, closeSession } = require('nightwatch-api')

setDefaultTimeout(60000)

BeforeAll(async () => {
  await createSession({ env: process.env.env })
})

AfterAll(async () => {
  await closeSession()
})