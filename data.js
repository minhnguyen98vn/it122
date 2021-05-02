
#include <stdio.h>

int main() {
  int values[5];

  printf("Enter 5 integers: ");


  for(int i = 0; i < 5; ++i) {
     scanf("%d", &values[i]);
  }

  printf("Displaying integers: ");


  for(int i = 0; i < 5; ++i) {
     printf("%d\n", values[i]);
  }
  return 0;
  if ('getAll' in objectStore) {

    objectStore.getAll().onsuccess = function(event) {
      logTimestamps(event.target.result);
    };
  } else {
    var timestamps = [];
    objectStore.openCursor().onsuccess = function(event) {
      var cursor = event.target.result;
      if (cursor) {
        timestamps.push(cursor.value);
        cursor.continue();
      } else {
        logTimestamps(timestamps);
}