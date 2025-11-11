// -------------------------------------------------------------
// 💠 Program Title: Demonstration of Call by Value in C
// 💻 Description: Shows how variables are passed by value to a function.
//                 The original value in main() remains unchanged even
//                 after modification inside the function.
// -------------------------------------------------------------

#include <stdio.h>

// Function definition
void Increment(int a)
{
    printf("Inside Function: Before Increment, Num = %d\n", a);
    a++;
    printf("Inside Function: After Increment, Num = %d\n", a);
}

int main()
{
    int num;

    printf("--- Welcome to Call by Value Demonstration ---\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    printf("\nBefore Function Call: Num = %d\n", num);
    Increment(num);
    printf("After Function Call: Num = %d\n", num);

    return 0;
}
