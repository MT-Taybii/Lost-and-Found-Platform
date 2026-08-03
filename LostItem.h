#ifndef LOSTITEM_H
#define LOSTITEM_H

#include "Item.h"

class LostItem : public Item
{
private:
    string ownerName;

public:
    LostItem(
        string name,
        string desc,
        string loc,
        string owner)
        : Item(name, desc, loc)
    {
        ownerName = owner;
    }

    void display()
    {
        cout << "\n===== LOST ITEM =====\n";
        cout << "Item Name      : " << itemName << endl;
        cout << "Description    : " << description << endl;
        cout << "Location Lost  : " << location << endl;
        cout << "Owner Name     : " << ownerName << endl;
    }
};

#endif