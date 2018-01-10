#include<stdio.h>
void main()
{
  int i,j,sum=0;
  printf("enter no.");
  scanf("%d",&j);
  for(i=1;i<=j;i++)
    sum+=i;
  printf("%d",sum);
}  
