#include <stdio.h>

int Palindrome(int position)
{
    if (position <= = 1)
    {
        return position;
    }
    return 
}

int main()
{
    printf("---Find the palindrome of a num using Palindorme---\n");
    int num;
    printf("Enter the num: ");
    scanf("%d", &num);

    int copy = num;
    int reverse = 0;

    while (copy > 0)
    {
        int digit = copy % 10;
        reverse = reverse * 10 + digit;
        copy = copy / 10;
    }

    printf("Palindrome of %d is %d\n", num, reverse);

    return 0;
}
