# CSS4 Implementation note

The lexical scanner for the CSS core syntax in section 4.1.1 can be implemented as a scanner without back-up. In Lex notation, that requires the addition of the following patterns (which do not change the returned tokens, only the efficiency of the scanner):

{ident}/\\          return IDENT;
#{name}/\\          return HASH;
@{ident}/\\         return ATKEYWORD;
#/\\                return DELIM;
@/\\                return DELIM;
@/-                 return DELIM;
@/-\\               return DELIM;
-/\\                return DELIM;
-/-                 return DELIM;
\</!                return DELIM;
\</!-               return DELIM;
{num}{ident}/\\     return DIMENSION;
{num}/\\            return NUMBER;
{num}/-             return NUMBER;
{num}/-\\           return NUMBER;
[0-9]+/\.           return NUMBER;
u/\+                return IDENT;
u\+[0-9a-f?]{1,6}/- return UNICODE_RANGE;