"use strict"

main() 

function main()
{
  let num1 = 0
  let num2 = 0
  let sum = 0
  let diff = 0
  let prod = 0
  let quot = 0
  let mod = 0
  let again = ""
  let firstChar = ""
  let runAgain  = true

  while (runAgain)
  {
    num1 = inputNumber()
    num2 = inputNumber()
    sum  = calculateSum(num1, num2)
    diff = calculateDiff(num1, num2)
    prod = calculateProd(num1, num2)
    quot = calculateQuot(num1, num2)
    mod  = calculateMod(num1, num2)
    showAllResults(num1, num2, sum, diff, prod, quot, mod)

    runAgain = doAgain()
  }
}

function inputNumber()
{
  let number = parseInt(prompt("Enter a number"))
  while (isNaN(number))
  {
    number = parseInt(prompt("Enter a number"))
  }

  return number
}

function calculateSum(num1, num2)
{
  return num1 + num2
}

function calculateDiff(num1, num2)
{
  return num1 - num2
}

function calculateProd(num1, num2)
{
  return num1 * num2
}

function calculateQuot(num1, num2)
{
  let quot = 0
  if (num2 == 0)
  {
    quot = "Illegal divide by 0"
  }
  else 
  {
    quot = num1 / num2
  }

  return quot
}

function calculateMod(num1, num2)
{
  let mod = 0
  if (num2 == 0)
  {
    mod = "Illegal divide by 0"
  }
  else 
  {
    mod = num1 % num2
  }

  return mod
}

function showAllResults(num1, num2, sum, diff, prod, quot, mod)
{ 
  let outputStr = (`${num1} + ${num2} = ${sum}\n`)
  outputStr    += (`${num1} - ${num2} = ${diff}\n`)
  outputStr    += (`${num1} * ${num2} = ${prod}\n`)
  outputStr    += (`${num1} / ${num2} = ${quot.toFixed(2)}\n`)
  outputStr    += (`${num1} % ${num2} = ${mod}\n`)
  
  alert(outputStr)
}

function doAgain()
{
  let again = prompt("Run program again? (Y/N)", "Y")
  again = again.toUpperCase()
  let firstChar = again.charAt(0)

  if (firstChar !== "Y")
  {
    return false
  }

  return true
}