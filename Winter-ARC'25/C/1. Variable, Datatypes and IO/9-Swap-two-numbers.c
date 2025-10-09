#include <stdio.h>

int main()
{
    int a = 5, b = 10, temp;

    printf("\nBefore:--\n");
    printf("A:- %d\n", a);
    printf("B:- %d\n", b);
    // printf("Temp:- %d\n", temp);

    temp = a;
    a = b;
    b = temp;

    printf("\nAfter:--\n");
    printf("A:- %d\n", a);
    printf("B:- %d\n", b);
    // printf("Temp:- %d\n", temp);
}