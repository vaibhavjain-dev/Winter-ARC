// Program to calculate grade based on marks

#include <stdio.h>

int main()
{
    int percentage;

    printf("-- Program to calculate grade based on marks --\n");

    printf("\nEnter your marks (0-100): ");
    scanf("%d", &percentage);

    if (percentage > 90)
        printf("You got an A grade.\n");
    else if (percentage > 75)
        printf("You got a B grade.\n");
    else if (percentage > 60)
        printf("You got a C grade.\n");
    else if (percentage > 45)
        printf("You got a D grade.\n");
    else if (percentage >= 0)
        printf("You got an F grade.\n");
    else
        printf("Invalid input!\n");

    return 0;
}
