/*
  # Add unique constraint on nomor_hp + tanggal_lahir
  Prevents duplicate submissions from the same person.
*/

ALTER TABLE form_submissions
  ADD CONSTRAINT unique_hp_tanggal_lahir UNIQUE (nomor_hp, tanggal_lahir);
