export const validation = (resultData) => {
  let is_valid = true;
  let is_invalid = true;
  var pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );

  if (resultData.email.rules.minLength < resultData.email.value.length) {
    if (
      resultData.password.rules.minLength < resultData.password.value.length
    ) {
      if (resultData.confirmPassword.value === resultData.password.value) {
        if (pattern.test(resultData.email.value)) {
          is_valid = false;
        }
      }
    }
  }
  return { is_valid, is_invalid };
};
