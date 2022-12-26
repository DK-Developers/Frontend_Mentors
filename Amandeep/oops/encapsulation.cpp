#include<iostream>
using namespace std;

class abc{
    private:
    string Name;
    int Age;
    public:
    void setname(string name){
        Name=name;
    }
    string getname(){
        return Name;
    }
    void setage(int age){
        Age=age;
    }
    int getage(){
        return Age;
    }
    void display(){
        cout<<"My Name is: "<<getname()<<" and my age: "<<getage()<<endl;
    }
};

int main(){
    abc obj;
    obj.setname("Amandeep");
    obj.setage(23);
    obj.display();
}