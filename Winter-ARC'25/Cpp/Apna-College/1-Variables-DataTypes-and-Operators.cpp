// Variables and Datatypes

// #include <iostream>
// using namespace std;

// int main()
// {
//     int age = 18;
//     char grade = 'A';
//     float pi = 3.14f;
//     bool isitSafe = false;
//     double price = 100.00;

//     cout << isitSafe << endl;
//     return 0;
// }

//////////////////////////////////////////////////////////////////////////////////////////

// Operators

#include <iostream>
using namespace std;

int main()
{
    int a = 5, b = 10;
    cout << "Operators in C++" << "\n";

    // Arithmetic Operators
    cout << "Arithmetic Operators" << "\n";
    cout << "Addition: " << (a + b) << endl;
    cout << "Difference: " << (a - b) << endl;
    cout << "Multiply: " << (a * b) << endl;
    cout << "Divide: " << (static_cast<float>(a) / b) << endl; // Cast to float for accurate division

    // Relational Operators
    cout << "Relational Operators" << "\n";
    cout << "Less Than: " << (a < b) << endl;
    cout << "Less than equal to: " << (a <= b) << endl;
    cout << "Greater than: " << (a > b) << endl;
    cout << "Greater than equal to: " << (a >= b) << endl;

    // Logical Operators
    cout << "Logical Operators" << "\n";
    cout << "OR : " << ((a < b) || (b > 0)) << endl;
    cout << "AND : " << ((a < b) && (b > 0)) << endl;
    cout << "NOT : " << !(a > b) << endl;

    // Unary Operators
    cout << "\nUnary Operators\n";
    b = ++a; // Pre Increment
    cout << "Pre-Increment: b = " << b << ", a = " << a << endl;

    b = a++; // Post Increment
    cout << "Post-Increment: b = " << b << ", a = " << a << endl;

    b = --a; // Pre Decrement
    cout << "Pre-Decrement: b = " << b << ", a = " << a << endl;

    b = a--; // Post Decrement
    cout << "Post-Decrement: b = " << b << ", a = " << a << endl;
    return 0;
}
