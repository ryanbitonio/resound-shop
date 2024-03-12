export function generateSecureNumericOTP() {
  const length = 6;
  const charset = "0123456789";
  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  let OTP = "";
  for (let i = 0; i < length; i++) {
    OTP += charset[randomValues[i] % charset.length];
  }
  return OTP;
}
