#include<stdio.h>
void main()
{
  int a[100],i,sum=0,k,n;
  printf("enter the no. of elements");
  scanf("%d",&n);
  for(i=0;i<n;i++)
    scanf("%d",&a[i]);
 printf("enter the no.");
 scanf("%d",&k);
 for(i=0;i<k;i++)
  sum+=a[i];
printf("%d",sum);
}
