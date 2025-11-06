#include <stdio.h>

int main()
{
    int rows, i, j, k;

    printf("--- Welcome to Printing Patterns ---\n");
    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    // ---------------------------------------
    // 🔹 Pattern 1: Increasing Right Triangle
    // ---------------------------------------
    printf("\n[ Pattern 1: Increasing Right Triangle ]\n\n");

    for (i = 1; i <= rows; i++)
    {
        for (j = 1; j <= i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }

    // ---------------------------------------
    // 🔹 Pattern 2: Decreasing Right Triangle
    // ---------------------------------------
    printf("\n[ Pattern 2: Decreasing Right Triangle ]\n\n");

    for (i = 1; i <= rows; i++)
    {
        for (j = rows; j >= i; j--)
        {
            printf("* ");
        }
        printf("\n");
    }

    // ---------------------------------------
    // 🔹 Pattern 3: Left Half Pyramid (Right-Aligned)
    // ---------------------------------------
    printf("\n[ Pattern 3: Left Half Pyramid (Right-Aligned) ]\n\n");

    for (i = 1; i <= rows; i++)
    {
        // Print leading spaces
        for (j = rows; j > i; j--)
        {
            printf(" ");
        }

        // Print stars
        for (k = 1; k <= i; k++)
        {
            printf("*");
        }
        printf("\n");
    }

    // ---------------------------------------
    // 🔹 Pattern 4: Full Pyramid
    // ---------------------------------------
    printf("\n[ Pattern 4: Full Pyramid ]\n\n");

    for (i = 1; i <= rows; i++)
    {
        // Print leading spaces
        for (j = rows; j > i; j--)
        {
            printf(" ");
        }

        // Print stars
        for (k = 1; k <= i; k++)
        {
            printf("* ");
        }
        printf("\n");
    }

    return 0;
}
