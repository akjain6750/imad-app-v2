#include<stdio.h>
void main()
{
  int n,c=0;
  printf("enter no.");
  scanf("%d",&n);
  while(n>0)
  {
    c++;
    n=n/10;
  }
  printf("%d",c);
}
