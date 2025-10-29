// Program to categorize marks as High, Moderate, or Low

#include <stdio.h>

int main()
{
    int percentage;

    printf("-- Program to categorize marks as High, Moderate, or Low --\n");

    printf("\nEnter your marks (0-100): ");
    scanf("%d", &percentage);

    printf("\nYour marks fall into this category: ");
    (percentage > 80)    ? printf("High\n")
    : (percentage >= 50) ? printf("Moderate\n")
                         : printf("Low\n");

    return 0;
}
