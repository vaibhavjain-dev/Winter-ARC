// Program: Area of Triangle Calculator

#include <stdio.h>

int main()
{
    int h, b;
    printf("\n--Area of Triangle--\n");

    printf("Enter the height of the triangle: ");
    scanf("%d", &h);

    printf("Enter the breadth of the triangle: ");
    scanf("%d", &b);

    float area = 0.5f * b * h;
    printf("The area of the Triangle is: %.2f\n", area);

    return 0;
}
