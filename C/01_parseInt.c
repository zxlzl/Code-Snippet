#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* parseInt：传入字符串与进制数（2-36），返回string以十进制时显示的数 */
int parseInt(char s[],int r) {
  int res = 0;
  for (int i = 0; i < strlen(s); i++) {
    int temp;
    if (s[i] >= '0' && s[i] <= '9') {
      temp = s[i] - '0';
    } else if(s[i] >= 'a' && s[i] <= 'z') {
      temp = s[i] - 'a' + 10;
    }else if(s[i] >= 'A' && s[i] <= 'Z') {
      temp = s[i] - 'A' + 10;
    }else {
      printf("NaN");
      exit(-1);
    }
    if (temp >= r) {
      printf("NaN");
      exit(-1);
    }
    res = res * r + temp;
  }
  return res;
}

int main() {
  char string[] = "10";
  printf("%d", parseInt(string,17));
  return 0;
}