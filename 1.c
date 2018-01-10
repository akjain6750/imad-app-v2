#include<stdio.h>
void  main()
{
  int i;
  printf("enter any integer");
  scanf("%d",&i);
  if(i>=1)
    printf("Positive");
  else if(i==0)
    printf("Zero");
  else
    printf("Negative");
}
