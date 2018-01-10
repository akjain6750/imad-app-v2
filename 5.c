#include<stdio.h>
void main()
{
  int i,j,k;
  printf("enter 3 no.");
  scanf("%d\n%d\n%d",&i,&j,&k);
  if(i>j)
    {
    if(i>k)
      printf("largest %d",i);
    else
      printf("largest %d",k);
    }
  else
  {
    if(j>k)
      printf("largest %d",j);
    else
      printf("largest %d",k);
  }
}  
