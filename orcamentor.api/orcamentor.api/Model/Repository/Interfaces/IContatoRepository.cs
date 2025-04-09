namespace orcamentor.api.Model.Repository.Interfaces
{
    public interface IContatoRepository
    {
        Task<List<Contato>> Listar();
        Task<Contato> BuscarPorId(int id);

        Task Salvar(Contato contato);
    }
}
