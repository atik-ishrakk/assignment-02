function validateExpression() {
    const expressionType = document.getElementById('expressionType').value;
    const inputExpression = document.getElementById('inputExpression').value;
    let regex;
  
    switch (expressionType) {
      case 'email':
        regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        break;
      case 'phoneNumber':
        regex = /^\d{10}$/;
        break;
      case 'postCode':
        regex = /^\d{4}$/;
        break;
      default:
        regex = /^.*$/; // Default to any string
    }
  
    const isValid = regex.test(inputExpression);
    const resultElement = document.getElementById('result');
  
    if (isValid) {
      resultElement.style.color = 'green';
      resultElement.textContent = 'Valid';
    } else {
      resultElement.style.color = 'red';
      resultElement.textContent = 'Invalid';
    }
  }
  