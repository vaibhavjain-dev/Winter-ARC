// 🔁 Check if a number is palindrome or not

#include <stdio.h>

int main()
{
    printf("\n--- Find Palindrome ---\n");

    int num;
    printf("Enter a number: ");
    scanf("%d", &num);

    int copy = num;
    int reverse = 0;

    while (copy > 0)
    {
        int digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy /= 10;
    }

    printf("Reversed number of %d is %d\n", num, reverse);

    return 0;
}
