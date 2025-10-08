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
    cout << "OR : " << ((a < b) || (a > b)) << endl;  // Added parentheses for clarity
    cout << "AND : " << ((a < b) && (a > b)) << endl; // Added parentheses for clarity
    cout << "NOT : " << !(a < b) << endl;             // Fixed NOT operator example

    return 0;
}
