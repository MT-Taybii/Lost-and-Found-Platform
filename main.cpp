#include <iostream>
#include <vector>
#include <limits>

#include "LostItem.h"
#include "FoundItem.h"
using namespace std;
bool isValidName(string text)
{
    if (text.empty())
        return false;

    for (char c : text)
    {
        if (!isalpha(c) && c != ' ')
            return false;
    }

    return true;
}
bool isValidItem(string text)
{
    if (text.empty())
        return false;

    for (char c : text)
    {
        if (!isalnum(c) && c != ' ')
            return false;
    }

    return true;
}
string getValidName(string message)
{
    string input;

    while (true)
    {
        cout << message;
        getline(cin, input);

        if (isValidName(input))
            return input;

        cout << "\nInvalid Input!";
        cout << "\nOnly letters and spaces allowed.\n\n";
    }
}
string getValidItem(string message)
{
    string input;

    while (true)

    {
        cout << message;
        getline(cin, input);

        if (isValidItem(input))
            return input;

        cout << "\nInvalid Item Name";
        cout << "\nOnly letters, numbers and spaces allowed.\n\n";
    }
}
int getMenuChoice()
{
    int choice;
    int attempts = 0;

    while (attempts < 3)
    {
        if (cin >> choice)
        {
            cin.ignore(1000, '\n');

            if (choice >= 1 && choice <= 6)
            {
                return choice;
            }

            cout << "\nInvalid Choice!";
            cout << "\nPlease enter a number between 1 and 6.\n";
        }
        else
        {
            cout << "\nInvalid Input!";
            cout << "\nNumbers only allowed.\n";

            cin.clear();
            cin.ignore(1000, '\n');
        }

        attempts++;
    }

    cout << "\nToo many invalid attempts!";
    cout << "\nProgram terminated.\n";

    exit(0);
}
int main()
{
    vector<LostItem> lostItems;
    vector<FoundItem> foundItems;

    int choice;

    do
    {
        cout << "\n1. Report Lost Item";
        cout << "\n2. Report Found Item";
        cout << "\n3. Show Lost Items";
        cout << "\n4. Show Found Items";
        cout << "\n5. Find Matches";
        cout << "\n6. Exit";
        cout << "\n\nEnter Choice: ";

        choice = getMenuChoice();

        switch (choice)
        {
        case 1:
        {
            string item;
            string description;
            string location;
            string owner;

            cout << "\n--- REPORT LOST ITEM ---\n";

            item = getValidItem("Item Name: ");

            cout << "Description: ";
            getline(cin, description);

            location = getValidName("Location Lost: ");

            owner = getValidName("Owner Name: ");

            lostItems.push_back(
                LostItem(
                    item,
                    description,
                    location,
                    owner));

            cout << "\nLost Item Added Successfully!\n";
            break;
        }

        case 2:
        {
            string item;
            string description;
            string location;
            string finder;

            cout << "\n--- REPORT FOUND ITEM ---\n";

            item = getValidItem("Item Name: ");

            cout << "Description: ";
            getline(cin, description);

            location = getValidName("Location Found: ");

            finder = getValidName("Finder Name: ");

            foundItems.push_back(
                FoundItem(
                    item,
                    description,
                    location,
                    finder));

            cout << "\nFound Item Added Successfully!\n";
            break;
        }

        case 3:
        {
            cout << "\n===== LOST ITEMS =====\n";

            if (lostItems.empty())
            {
                cout << "\nNo Lost Items Found.\n";
            }
            else
            {
                for (size_t i = 0; i < lostItems.size(); i++)
                {
                    lostItems[i].display();
                }
            }

            break;
        }

        case 4:
        {
            cout << "\n===== FOUND ITEMS =====\n";

            if (foundItems.empty())
            {
                cout << "\nNo Found Items Found.\n";
            }
            else
            {
                for (size_t i = 0; i < foundItems.size(); i++)
                {
                    foundItems[i].display();
                }
            }

            break;
        }

        case 5:
        {
            bool found = false;

            cout << "\n===== MATCH RESULTS =====\n";

            for (size_t i = 0; i < lostItems.size(); i++)
            {
                for (size_t j = 0; j < foundItems.size(); j++)
                {
                    if (lostItems[i].getItemName() ==
                        foundItems[j].getItemName())
                    {
                        cout << "\nPossible Match Found:";
                        cout << "\nItem Name: "
                             << lostItems[i].getItemName()
                             << endl;

                        found = true;
                    }
                }
            }

            if (!found)
            {
                cout << "\nNo Matches Found.\n";
            }

            break;
        }

        case 6:
        {
            cout << "\nThank You For Using The System!\n";
            break;
        }

        default:
        {
            cout << "\nInvalid Menu Option!\n";
        }
        }

    } while (choice != 6);

    return 0;
}