// 🔢 Armstrong Number Finder in C

#include <stdio.h>

int main()
{
    int num;
    printf("--- Armstrong Number Finder ---\n");
    printf("Enter a number: ");
    scanf("%d", &num);

    int sum = 0;
    int copy = num;

    while (copy > 0)
    {
        int digit = copy % 10;
        sum += digit * digit * digit;
        copy = copy / 10;
    }

    if (num == sum)
    {
        printf("✅ Yes, %d is an Armstrong number.\n", num);
    }
    else
    {
        printf("❌ No, %d is not an Armstrong number.\n", num);
    }

    return 0;
}
