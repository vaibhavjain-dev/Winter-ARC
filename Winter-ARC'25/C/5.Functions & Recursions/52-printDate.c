// -------------------------------------------------------------
// 💠 Program Title: Display Current Compilation Date using Function
// 💻 Description: Demonstrates the use of predefined macros in C
//                 by printing the current compilation date via a function.
// -------------------------------------------------------------

#include <stdio.h>
#include <time.h>

// Function definition
void print_date()
{
    printf("Today's date is: %s\n", __DATE__);
}

int main()
{
    print_date();
    return 0;
}
