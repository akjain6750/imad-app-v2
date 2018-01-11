#include<stdio.h>
void main()
{
  int i;
  printf("enter year");
  scanf("%d",&i);
  if(i%4==0 && i%100!=0 && i%400==0)
    printf("leap year");
  else
    printf("not leap year");
}
