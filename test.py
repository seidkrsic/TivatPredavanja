from random import randint

numbers = []
for i in range(10):
    numbers.append(randint(1,100))
print(numbers)
result = 1 
for number in numbers: 
    result = result * number 
print(result)

