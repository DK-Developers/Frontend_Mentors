#include<iostream>
using namespace std;

class abc{
    private:
    int A;
    int B;
    public:
    abc(int a=0,int b=0){
        A=a;
        B=b;
    }
    abc operator +(abc const &obj){
        abc res;
        res.A=A+obj.A;
        res.B=B+obj.B;
        return res;
    }
    void display(){
        cout<<A<<" + "<<B<<endl;
    }
};

int main(){
    abc c1(1,1),c2(1,1);
    abc c3=c1+c2;
    c3.display();
    return 0;
}