// Program to categorize a person into age groups

#include <stdio.h>

int main()
{
    int age;

    printf("-- Program to categorize a person into age groups --\n");

    printf("\nEnter your age: ");
    scanf("%d", &age);

    if (age < 0)
        printf("Invalid input! Age cannot be negative.\n");
    else if (age < 13)
        printf("You are a Child. (Age: %d)\n", age);
    else if (age < 20)
        printf("You are a Teenager. (Age: %d)\n", age);
    else if (age < 60)
        printf("You are an Adult. (Age: %d)\n", age);
    else
        printf("You are a Senior Citizen. (Age: %d)\n", age);

    return 0;
}
