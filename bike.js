      function displaycarDetails(carType) {
         document.getElementById("carType").innerHTML = carType;
         document.getElementById("carTypePurchase").innerHTML = carType;
         document.getElementById("carTypePayment").innerHTML = carType;
         document.getElementById("carDetailsContainer").style.display = "block";
      }

      function displayPurchase() {
         document.getElementById("purchaseContainer").style.display = "block";
         document.getElementById("carDetailsContainer").style.display = "none";
      }

      function displayPayment() {
         var customerName = document.getElementById("customerName").value;
         var carType = document.getElementById("carTypePurchase").innerHTML;
         var withoffer = document.getElementById("withoffer").checked ? "with offer" : "without offer";
         var price = withoffer== "with offer" ? "$700000" : "$";
         document.getElementById("customerDetails").innerHTML = customerName + " (" + withoffer + ")";
         document.getElementById("price").innerHTML = price;
         document.getElementById("paymentContainer").style.display = "block";
         document.getElementById("purchaseContainer").style.display = "none";
      }

      function returnHome() {
         document.getElementById("paymentContainer").style.display = "none";
         document.getElementById("homeContainer").style.display = "block";
      }
   