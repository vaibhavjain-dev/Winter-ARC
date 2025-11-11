#include <stdio.h>

float get_Average(float a, float b, float c, float d, float e)
{
    float Avg = (a + b + c + d + e) / 5.0;
    return Avg;
}

int main()
{
    float a, b, c, d, e;

    printf("---Find Avg of 5 nums using function---\n");
    printf("Enter 5 numbers: ");
    scanf("%f %f %f %f %f", &a, &b, &c, &d, &e);

    float Average = get_Average(a, b, c, d, e);

    printf("\nAverage of 5 numbers is: %.2f\n", Average);
    return 0;
}
