import { createClient } from '@libsql/client/web';

const turso = createClient({
  url: "libsql://jenniferandalejandrodb-alefule.aws-us-east-1.turso.io",
  authToken: "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3NDM5NzA3NjYsImlkIjoiOGM4Y2ZjNmEtMDBhZS00NDkyLThmNDAtOTA3YTMxZTExZjMwIiwicmlkIjoiMzYxOTE3NTUtOWZmNS00ZmVjLWE1YjctNDVhMTI1NGI2YTU0In0.zCG8RL4jJpGg0SeYJSLSDY54FxGMSm1GcLPMLjEy1rG-8qpp8qIsVSYC0onzZVJxX3Owic0OpQ3aIw-q0VCFDA"
});

export { turso as t };
