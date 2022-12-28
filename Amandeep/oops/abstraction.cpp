#include<iostream>
using namespace std;

class abstrct{
    public: 
    virtual void pen()=0;
};

class abc: public abstrct{
    public:
    void pen(){
        cout<<"pen are leaking...!";
    }
};

int main(){
    abc *b=new abc();
    b->pen();
    return 0;
}