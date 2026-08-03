#ifndef ITEM_H
#define ITEM_H

#include <iostream>
#include <string>

using namespace std;

class Item
{
protected:
    string itemName;
    string description;
    string location;

public:
    Item(string name, string desc, string loc)
    {
        itemName = name;
        description = desc;
        location = loc;
    }

    string getItemName()
    {
        return itemName;
    }

    virtual void display() = 0;

    virtual ~Item() {}
};

#endif