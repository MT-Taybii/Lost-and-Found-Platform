#ifndef FOUNDITEM_H
#define FOUNDITEM_H

#include "Item.h"

class FoundItem : public Item
{
private:
    string finderName;

public:
    FoundItem(
        string name,
        string desc,
        string loc,
        string finder)
        : Item(name, desc, loc)
    {
        finderName = finder;
    }

    void display()
    {
        cout << "\n===== FOUND ITEM =====\n";
        cout << "Item Name      : " << itemName << endl;
        cout << "Description    : " << description << endl;
        cout << "Location Found : " << location << endl;
        cout << "Finder Name    : " << finderName << endl;
    }
};

#endif