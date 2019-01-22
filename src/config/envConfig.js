const result = require('dotenv').config({
  path: 'src/config/.env.int'
});

if (result.error) {
  throw result.error;
}

const verifyEnvVirables = () => {
  const envVirables = ['testURL', 'password', 'envname'];
  const invalidEnvVirables = envVirables.filter(v => !process.env[v]);
  if (invalidEnvVirables.length) {
    invalidEnvVirables.map(v => console.log(v, process.env[v]));
    throw new Error(`invalid environment virables: ${invalidEnvVirables}`);
  }
};

verifyEnvVirables();
