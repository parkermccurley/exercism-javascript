defmodule NucleotideCount do
  @nucleotides [?A, ?C, ?G, ?T]

  def count(strand, nucleotide) do
    strand |> Enum.count(fn char -> char == nucleotide end)
  end

  def histogram(strand) do
    @nucleotides |> Map.new(fn char -> { char, count(strand, char) } end)
  end
end
