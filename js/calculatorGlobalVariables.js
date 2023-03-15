"use strict"

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

main() 

function main()
{
  while (runAgain)
  {
    num1 = inputNumber()
    num2 = inputNumber()
    sum  = calculateSum()
    diff = calculateDiff()
    prod = calculateProd()
    quot = calculateQuot()
    mod  = calculateMod()
    showAllResults()

    again = prompt("Run program again? (Y/N)", "Y")
    again = again.toUpperCase()
    firstChar = again.charAt(0)

    if (firstChar !== "Y")
    {
      runAgain = false
    }
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

function calculateSum()
{
  return num1 + num2
}

function calculateDiff()
{
  return num1 - num2
}

function calculateProd()
{
  return num1 * num2
}

function calculateQuot()
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

function calculateMod()
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

function showAllResults()
{ 
  let outputStr = (`${num1} + ${num2} = ${sum}\n`)
  outputStr    += (`${num1} - ${num2} = ${diff}\n`)
  outputStr    += (`${num1} * ${num2} = ${prod}\n`)
  outputStr    += (`${num1} / ${num2} = ${quot.toFixed(2)}\n`)
  outputStr    += (`${num1} % ${num2} = ${mod}\n`)
  
  alert(outputStr)
}