const priceOfIceCream = 30

print("Heyy come get ur ice cream !!!!")
print("It's $30 btw")
let paymentRecieved = prompt("How many dollars will you give?")

let isPaymentEnough = paymentRecieved>=priceOfIceCream

let changeDollars = paymentRecieved % priceOfIceCream

if (isPaymentEnough) {
    print("Thanks  here's your ice cream!")

    if (changeDollars!=0) {
        print("Your change is $" + changeDollars + ".")
    }
} else {
    print("LOL ur broke.....come back later")
} 