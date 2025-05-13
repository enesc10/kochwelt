const recipe = {
  name: "Salad Nice",
  portion: 1,
  ingredients: {
    salad: 100,
    tuna: 50,
    ei: 50,
    fisolen: 100,
    olivenoil: 10,
    saltpepper: 5,
    zsaft: 5,
    kartoffel: 100,
    senf: 2,
    essig: 10,
  },
};

const maxPortion = 20;

function calcIngredient() {
  const portionInput = document.getElementById("Portion");
  const newPortion = parseInt(portionInput.value, 10);

  if (isNaN(newPortion) || newPortion <= 0) {
    portionInput.setCustomValidity("Please enter a valid number.");
    portionInput.reportValidity();
    return;
  } else if (newPortion > maxPortion) {
    portionInput.setCustomValidity(
      `The maximum portion you can make is ${maxPortion}.`
    );
    portionInput.reportValidity();
    return;
  } else {
    portionInput.setCustomValidity("");
  }

  const newAmount = {
    salad: (recipe.ingredients.salad / recipe.portion) * newPortion,
    tuna: (recipe.ingredients.tuna / recipe.portion) * newPortion,
    fisolen: (recipe.ingredients.fisolen / recipe.portion) * newPortion,
    olivenoil: (recipe.ingredients.olivenoil / recipe.portion) * newPortion,
    saltpepper: (recipe.ingredients.saltpepper / recipe.portion) * newPortion,
    zsaft: (recipe.ingredients.zsaft / recipe.portion) * newPortion,
    kartoffel: (recipe.ingredients.kartoffel / recipe.portion) * newPortion,
    ei: (recipe.ingredients.ei / recipe.portion) * newPortion,
    senf: (recipe.ingredients.senf / recipe.portion) * newPortion,
    essig: (recipe.ingredients.essig / recipe.portion) * newPortion,
  };
  document.getElementById("saladAmount").innerText =
    newAmount.salad.toFixed(0) + " g";
  document.getElementById("tunaAmount").innerText =
    newAmount.tuna.toFixed(0) + " g";
  document.getElementById("fisolenAmount").innerText =
    newAmount.fisolen.toFixed(0) + " g";
  document.getElementById("olivenoilAmount").innerText =
    newAmount.olivenoil.toFixed(0) + " g";
  document.getElementById("saltpepperAmount").innerText =
    newAmount.saltpepper.toFixed(0) + " g";
  document.getElementById("zsaftAmount").innerText =
    newAmount.zsaft.toFixed(0) + " g";
  document.getElementById("kartoffelAmount").innerText =
    newAmount.kartoffel.toFixed(0) + " g";
  document.getElementById("eiAmount").innerText =
    newAmount.ei.toFixed(0) + " g";
  document.getElementById("senfAmount").innerText =
    newAmount.senf.toFixed(0) + " g";
  document.getElementById("essigAmount").innerText =
    newAmount.essig.toFixed(0) + " ml";
}

function handleSubmit() {
  calcIngredient();
}

document.getElementById("submitButton").addEventListener("click", handleSubmit);
