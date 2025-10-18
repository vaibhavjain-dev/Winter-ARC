// Variables, Constants, and Data Types in C++

#include <iostream>
#include <string> // required for string
using namespace std;

int main()
{
    // 📦 Variables
    int age = 20;            // integer
    double height = 5.8;     // floating point number
    char grade = 'A';        // single character
    string name = "Vaibhav"; // text string
    bool isStudent = true;   // true or false

    // 🔒 Constant
    const double PI = 3.14159;

    // 🖨️ Output
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Height: " << height << endl;
    cout << "Grade: " << grade << endl;
    cout << "Is student? " << isStudent << endl;
    cout << "Value of PI (constant): " << PI << endl;

    return 0;
}
