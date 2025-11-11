#include <stdio.h>

void Max(float num1, float num2)
{
    if (num1 > num2)
    {
        printf("Num1 %.2f is greater than Num2 %.2f\n", num1, num2);
    }
    else if (num2 > num1)
    {
        printf("Num2 %.2f is greater than Num1 %.2f\n", num2, num1);
    }
    else
    {
        printf("Both Num1 and Num2 are equal: %.2f\n", num1);
    }
}

int main()
{
    Max(2, 5);

    return 0;
}
