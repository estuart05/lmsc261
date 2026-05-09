denominator = input("please enter a deniminator: ")
denominator = int(denominator)

try: 
    print(1/denominator)

except ZeroDivisionError:
    print("can't divide by a zero poopy >:(")

except ValueError:
    print("can't enter a string doodie")