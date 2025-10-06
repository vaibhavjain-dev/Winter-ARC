#include <stdio.h>

int main()
{
    int side;

    printf("Please enter side of square in cms:-\n");
    scanf("%d", &side);
    printf("The area of your square is %d cm\n", side * side);
}