using Microsoft.AspNetCore.Mvc;
using orcamentor.api.Model;
using orcamentor.api.Model.Repository.Interfaces;

namespace orcamentor.api.Controllers
{

    [ApiController]
    public class ContatosController : ControllerBase
    {
        private readonly IContatoRepository _repository;

        public ContatosController(IContatoRepository repository)
        {
            _repository = repository;
        }

        [HttpGet("api/contatos")]
        public IActionResult GetContatos()
        {
            var consultaContato = _repository.Listar().Result;
            return Ok(consultaContato);
        }

        [HttpGet("api/contatos/{id}")]
        public IActionResult GetContatosID (int id)
        {
            var consultaContato = _repository.BuscarPorId(id).Result;

            if (consultaContato == null)
            {
                return NotFound();        
            }

            return Ok(consultaContato); 
        }

        [HttpPost("api/contatos")]
        public IActionResult Salvar(Contato contato)
        {
            _repository.Salvar(contato);
            return Ok();
        }
    }
}
