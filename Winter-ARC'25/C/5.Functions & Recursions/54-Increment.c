#include <stdio.h>

void Increment(int a)
{
    printf("In Function Before The value of Num is %d\n", a);
    a++;
    printf("In Function After Increment : The value of Num is %d\n", a);
}

int main()
{
    int num;

    printf("\n---Welcome to showing call by value---\n");
    printf("\nPlease enter the number: ");
    scanf("%d", &num);

    printf("The value of Num is %d\n", num);
    Increment(num);
    printf("After Increment : The value of Num is %d\n", num);
    return 0;
}
