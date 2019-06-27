const API_URL = "https://compliance.dev.gnosisdev.com:443/api/v1"

export const requestUserVerificationToken = async (accountAddress, {
  captcha,
  country,
  expectedVolume,
  email,
  lastName,
  firstName,
  source,
  sourceMetadata
}) => {
  const request = new Request(
    `${API_URL}/users/${accountAddress}/`,
    { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({
      'g-recaptcha-response': captcha,
      country,
      expectedTradeVolume: expectedVolume,
      email,
      name: firstName,
      lastname: lastName,
      sourceOfWealth: source,
      sourceOfWealthMetadata: sourceMetadata
    })}
  )
  
  const response = await fetch(request)

  if (response.ok) {
    return await response.json()
  }
  throw new Error('Invalid Compliance API Response')
}